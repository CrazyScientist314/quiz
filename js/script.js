/* global $ */

$(document).ready(function(){
    var colorScore = 0;
    var flavorScore = 0;
    var monthScore = 0;
    $("#red").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 3;
        $("#red").css("border", "solid black 2px")
    });
    $("#orange").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 4;
    });
    $("#yellow").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 2;
    });
    $("#green").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 5;
    });
    $("#gray").click(function(){
        colorScore = colorScore * 0;
        colorScore = colorScore + 1;
    });
    $("#bland").click(function(){
        flavorScore = flavorScore * 0;
        flavorScore = flavorScore + 1;
    });
    $("#sour").click(function(){
        flavorScore = flavorScore * 0;
        flavorScore = flavorScore + 5;
    });
    $("#sweet").click(function(){
        flavorScore = flavorScore * 0;
        flavorScore = flavorScore + 3;
    });
    $("#allMonths").click(function(){
        monthScore * 0;
        monthScore + 1;
    });
    $("#July").click(function(){
        monthScore * 0;
        monthScore + 3;
    });
    $("#August").click(function(){
        monthScore * 0;
        monthScore + 2;
    });
    $("#September").click(function(){
        monthScore * 0;
        monthScore + 4;
    });
    $("#October").click(function(){
        monthScore * 0;
        monthScore + 5;
    });
    function totalScore(color, flavor, month){
        return color + flavor + month;
    }
    $("#reveal").click(function(){
        var name = $("#name").val();
        var total = totalScore(colorScore, flavorScore, monthScore);
        if(total <= 4){
            $(".result").html("<h2>" + name + ", you are an Apple Computer!</h2>");
        }else if(5 <= total <= 7){
            $(".result").html("<h2>" + name + ", you are a Golden Delicious!</h2>");
        }else if(8 <= total <= 10){
            $(".result").html("<h2>" + name + ", you are a Red Delicious!</h2>");
        }else if(11 <= total <= 13){
            $(".result").html("<h2>" + name + ", you are a Honeycrisp!</h2>");
        }else if(total => 14){
            $(".result").html("<h2>" + name + ", you are a Granny Smith!</h2>");
        }
    });
});
