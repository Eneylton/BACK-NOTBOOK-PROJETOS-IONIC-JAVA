<?php

require_once __DIR__ . '/vendor/autoload.php';
//CORS - Aplicativo 8100 | Aplicacao php 8000
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

putenv('PAGSEGURO_EMAIL=purezanegocios@gmail.com');
putenv('PAGSEGURO_TOKEN_SANDBOX=54D78E8346234B2FA6F2F9E17CA706DD');
putenv('PAGSEGURO_ENV=sandbox');

\PagSeguro\Library::initialize();
\PagSeguro\Library::cmsVersion()->setName("School of Net")->setRelease("10.0.1");
\PagSeguro\Library::moduleVersion()->setName("School of Net")->setRelease("10.0.2");

function paymentWithCreditCard($items, $hash, $total, $token)
{
    $creditCard = new \PagSeguro\Domains\Requests\DirectPayment\CreditCard();
    $creditCard->setMode('DEFAULT');

    $creditCard->setCurrency('BRL');

    foreach ($items as $key => $item) {
        $creditCard
            ->addItems()
            ->withParameters("00$key", $item['name'], 1, $item['price']);
    }

    $creditCard->setSender()
        ->setName('Eneylton Barros')
        ->setEmail('c03735392781046627027@sandbox.pagseguro.com.br')
        ->setPhone()->withParameters('98', '991581962');

    $creditCard->setSender()->setDocument()->withParameters('CPF', '643.267.643-68');
    $creditCard->setSender()->setHash($hash);

    $creditCard->setInstallment()->withParameters(1, $total);

    $creditCard->setShipping()
        ->setAddress()->withParameters(
            'Rua 03',
            '36',
            'Cohtrac IV',
            '65054539',
            'São Luís',
            'MA',
            'BRA',
            'Qd.05'
        );

    $creditCard->setBilling()
        ->setAddress()->withParameters(
            'Rua 03',
            '36',
            'Cohtrac IV',
            '65054539',
            'São Luís',
            'MA',
            'BRA',
            'Qd.05'
        );

    $creditCard->setToken($token);

    $creditCard->setHolder()->setName('Eneylton Barros');
    $creditCard->setHolder()->setBirthDate(date('27/09/1979'));
    $creditCard->setHolder()->setPhone()->withParameters('98', '991581962');
    $creditCard->setHolder()->setDocument()->withParameters('CPF', '643.267.643-68');

    try{
        /** @var \PagSeguro\Parsers\Transaction\CreditCard\Response $result */
        $result = $creditCard->register(\PagSeguro\Configuration\Configure::getAccountCredentials());
        echo json_encode([
            'code' => $result->getCode()
        ]);
    }catch (\Exception $e){
        http_response_code(500);
        echo json_encode([
            'error' => $e->getMessage()
        ]);
    }

}

function paymentWithBankSlip($items,$hash,$total)
{
    $bankSlip = new \PagSeguro\Domains\Requests\DirectPayment\Boleto();
    $bankSlip->setMode('DEFAULT');
    $bankSlip->setReference('Compra na loja da Pureza Store');
    $bankSlip->setReceiverEmail('c03735392781046627027@sandbox.pagseguro.com.br');
    $bankSlip->setCurrency('BRL');

    foreach ($items as $key => $item) {
        $bankSlip
            ->addItems()
            ->withParameters("00$key", $item['name'], 1, $item['price']);
    }

    $bankSlip->setSender()
        ->setName('Eneylton Barros')
        ->setEmail('c03735392781046627027@sandbox.pagseguro.com.br')
        ->setPhone()->withParameters('98', '91581962');

    $bankSlip->setSender()->setDocument()->withParameters('CPF', '156.009.442-76');
    $bankSlip->setSender()->setHash($hash);

    $bankSlip->setShipping()
        ->setAddress()->withParameters(
            'Rua 03',
            '36',
            'Cohtrac IV',
            '65054539',
            'São Luís',
            'MA',
            'BRA',
            'Qd.05'
        );

    try{
        /** @var \PagSeguro\Parsers\Transaction\Boleto\Response $result */
        $result = $bankSlip->register(\PagSeguro\Configuration\Configure::getAccountCredentials());
        echo json_encode([
            'code' => $result->getCode(),
            'link' => $result->getPaymentLink()
        ]);
    }catch (\Exception $e){
        http_response_code(500);
        echo json_encode([
            'error' => $e->getMessage()
        ]);
    }
}

$data = json_decode(file_get_contents('php://input'), true);
$method = $data['method'];
$items = $data['items'];
$hash = $data['hash'];
$total = $data['total'];
$token = $data['token'] ?? null; //isset($data['token']) ? $data['token']:null

if ($method == 'BOLETO') {
    paymentWithBankSlip($items,$hash,$total);
} elseif ($method == 'CREDIT_CARD') {
    paymentWithCreditCard($items,$hash,$total,$token);
}

