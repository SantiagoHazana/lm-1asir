<?php

    $name = $_POST["name"];
    $description = $_POST["description"];
    $price = $_POST["price"];
    $tax = $_POST["tax"];
    $promotion = $_POST["promotion"];

    $priceWithTax = 0;
    $priceWithDiscount = 0;

    echo "Bienvenido " . $name . "!<br>";

    if(isset($_POST["visit"])){
        visitorCount();
    }

    if($promotion == 'free-transport'){
        echo "Usted tiene transporte gratuito, no debe abonar nada";
    }else if($promotion == 'discount5'){
        calculateDiscount(5);
        echo "Su importe con 5% de descuento es: " . $priceWithDiscount . "€";
    }else{
        calculateTax();
        echo "Su importe es: " . $priceWithTax . "€";
    }

    //This function calculates the price with tax
    function calculateTax(){
        global $price, $tax, $priceWithTax;
        $priceWithTax = $price * (1 + ($tax/100));
    }

    //This function calculates the price with tax and then the discount
    function calculateDiscount($percentage){
        calculateTax();
        global $priceWithTax, $priceWithDiscount;
        $priceWithDiscount = $priceWithTax - ($priceWithTax * ($percentage/100));
    }

    //This function is responsible for opening a .txt file that saves the amount of times a person ticks the visit box
    function visitorCount (){
        $handle = fopen("visitorCounter.txt", "r+");

        if (!$handle){
            echo "Could not open or find counter file";
        }else{
            $counter = (int)fread($handle,20); 
            $counter++;
            echo "Usted es el visitante numero: " . $counter . "<br>";
            fwrite($handle, $counter);
            fclose($handle);
        }
    }
//Copyright shazana™ 2020 
?>

