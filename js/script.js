/* global $ */

$(document).ready(function(){
    var colorScore = 0;
    var flavorScore = 0;
    var monthScore = 0;
    $("#red").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 3;
        highlightColor("red");
    });
    $("#orange").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 4;
        highlightColor("orange");
    });
    $("#yellow").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 2;
        highlightColor("yellow");
    });
    $("#green").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 5;
        highlightColor("green");
    });
    $("#gray").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 1;
        highlightColor("gray");
    });
    $("#bland").click(function(){
        flavorScore = flavorScore * 0;
        flavorScore = flavorScore + 1;
        highlightFlavor("bland");
    });
    $("#sour").click(function(){
        flavorScore = flavorScore * 0;
        flavorScore = flavorScore + 5;
        highlightFlavor("sour");
    });
    $("#sweet").click(function(){
        flavorScore = flavorScore * 0;
        flavorScore = flavorScore + 3;
        highlightFlavor("sweet");
    });
    $("#allMonths").click(function(){
        monthScore = monthScore * 0;
        monthScore = monthScore + 1;
        highlightMonth("allMonths");
    });
    $("#July").click(function(){
        monthScore = monthScore * 0;
        monthScore = monthScore + 3;
        highlightMonth("July");
    });
    $("#August").click(function(){
        monthScore = monthScore * 0;
        monthScore = monthScore + 2;
        highlightMonth("August");
    });
    $("#September").click(function(){
        monthScore = monthScore * 0;
        monthScore = monthScore + 4;
        highlightMonth("September");
    });
    $("#October").click(function(){
        monthScore = monthScore * 0;
        monthScore = monthScore + 5;
        highlightMonth("October");
    });
    function highlightColor(colorHighlight){
        if(colorHighlight === "red"){
            $("#red").css("border", "solid black 2px");
            $("#orange").css("border", "");
            $("#yellow").css("border", "");
            $("#green").css("border", "");
            $("#gray").css("border", "");
        }else if(colorHighlight === "orange"){
            $("#orange").css("border", "solid black 2px");
            $("#red").css("border", "");
            $("#yellow").css("border", "");
            $("#green").css("border", "");
            $("#gray").css("border", "");
        }else if(colorHighlight === "yellow"){
            $("#yellow").css("border", "solid black 2px");
            $("#red").css("border", "");
            $("#orange").css("border", "");
            $("#green").css("border", "");
            $("#gray").css("border", "");
        }else if(colorHighlight === "green"){
            $("#green").css("border", "solid black 2px");
            $("#red").css("border", "");
            $("#orange").css("border", "");
            $("#yellow").css("border", "");
            $("#gray").css("border", "");
        }else if(colorHighlight === "gray"){
            $("#gray").css("border", "solid black 2px");
            $("#red").css("border", "");
            $("#orange").css("border", "");
            $("#yellow").css("border", "");
            $("#green").css("border", "");
        }
    }
    function highlightFlavor(flavorHighlight){
        if(flavorHighlight === "bland"){
            $("#bland").css("border", "solid black 2px");
            $("#sour").css("border", "");
            $("#sweet").css("border", "");
        }else if(flavorHighlight === "sour"){
            $("#sour").css("border", "solid black 2px");
            $("#bland").css("border", "");
            $("#sweet").css("border", "");
        }else if(flavorHighlight === "sweet"){
            $("#sweet").css("border", "solid black 2px");
            $("#bland").css("border", "");
            $("#sour").css("border", "");
        }
    }
    function highlightMonth(monthHighlight){
        if(monthHighlight === "allMonths"){
            $("#allMonths").css("border", "solid black 2px");
            $("#July").css("border", "");
            $("#August").css("border", "");
            $("#September").css("border", "");
            $("#October").css("border", "");
        }else if(monthHighlight === "July"){
            $("#July").css("border", "solid black 2px");
            $("#allMonths").css("border", "");
            $("#August").css("border", "");
            $("#September").css("border", "");
            $("#October").css("border", "");
        }else if(monthHighlight === "August"){
            $("#August").css("border", "solid black 2px");
            $("#allMonths").css("border", "");
            $("#July").css("border", "");
            $("#September").css("border", "");
            $("#October").css("border", "");
        }else if(monthHighlight === "September"){
            $("#September").css("border", "solid black 2px");
            $("#allMonths").css("border", "");
            $("#July").css("border", "");
            $("#August").css("border", "");
            $("#October").css("border", "");
        }else if(monthHighlight === "October"){
            $("#October").css("border", "solid black 2px");
            $("#allMonths").css("border", "");
            $("#July").css("border", "");
            $("#August").css("border", "");
            $("#September").css("border", "");
        }
    }
    function totalScore(color, flavor, month){
        return color + flavor + month;
    }
    $("#reveal").click(function(){
        var name = $("#name").val();
        var total = totalScore(colorScore, flavorScore, monthScore);
        if(total <= 4){
            $(".result").html("<h2>" + name + ", you are an Apple Computer!</h2>");
        }else if(total <= 7){
            $(".result").html("<h2>" + name + ", you are a Golden Delicious!</h2>");
        }else if(total <= 10){
            $(".result").html("<h2>" + name + ", you are a Red Delicious!</h2>");
        }else if(total <= 13){
            $(".result").html("<h2>" + name + ", you are a Honeycrisp!</h2>");
        }else if(total => 14){
            $(".result").html("<h2>" + name + ", you are a Granny Smith!</h2>");
        }
    });
});
