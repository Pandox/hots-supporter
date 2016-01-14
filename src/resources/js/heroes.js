if (typeof (HOTS) === 'undefined') {
    HOTS = {};
}
if (typeof (HOTS.HEROES) === 'undefined') {
    HOTS.HEROES = {};
}


HOTS.HEROES = (function() {

    var data = {
        ABATHUR: {
            url: "http://www.heroescounters.com/images/heroes/92/1.jpg"
        },
        ARTHAS: {
            url: "http://www.heroescounters.com/images/heroes/92/2.jpg"
        },
        SONYA: {
            url: "http://www.heroescounters.com/images/heroes/92/3.jpg"
        },
        UNKNOWN: {
            url: ""
        }
    };


    function heroData(hero){
        var heroData = data[hero.toUpperCase()];
        if(!heroData){
            heroData = data.UNKNOWN;
        }

        return heroData;
    }


    return {
        heroData: heroData
    }
})();