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
        VALLA: {
            url: "http://www.heroescounters.com/images/heroes/92/4.jpg"
        },
        DIABLO: {
            url: "http://www.heroescounters.com/images/heroes/92/5.jpg"
        },
        ECT: {
            url: "http://www.heroescounters.com/images/heroes/92/6.jpg"
        },
        FALSTAD: {
            url: "http://www.heroescounters.com/images/heroes/92/7.jpg"
        },
        GAZLOW: {
            url: "http://www.heroescounters.com/images/heroes/92/8.jpg"
        },
        ILLIDAN: {
            url: "http://www.heroescounters.com/images/heroes/92/9.jpg"
        },
        KERRIGAN: {
            url: "http://www.heroescounters.com/images/heroes/92/10.jpg"
        },
        MALFURION: {
            url: "http://www.heroescounters.com/images/heroes/92/11.jpg"
        },
        MURADIN: {
            url: "http://www.heroescounters.com/images/heroes/92/12.jpg"
        },
        NOVA: {
            url: "http://www.heroescounters.com/images/heroes/92/13.jpg"
        },
        RAYNOR: {
            url: "http://www.heroescounters.com/images/heroes/92/14.jpg"
        },
        HAMMER: {
            url: "http://www.heroescounters.com/images/heroes/92/15.jpg"
        },
        STITCHES: {
            url: "http://www.heroescounters.com/images/heroes/92/16.jpg"
        },
        TASSADOR: {
            url: "http://www.heroescounters.com/images/heroes/92/17.jpg"
        },
        THYCUS: {
            url: "http://www.heroescounters.com/images/heroes/92/18.jpg"
        },
        TYRAEL: {
            url: "http://www.heroescounters.com/images/heroes/92/19.jpg"
        },
        TYRANDE: {
            url: "http://www.heroescounters.com/images/heroes/92/20.jpg"
        },
        UTHER: {
            url: "http://www.heroescounters.com/images/heroes/92/21.jpg"
        },
        NAZEEBO: {
            url: "http://www.heroescounters.com/images/heroes/92/22.jpg"
        },
        ZERATUL: {
            url: "http://www.heroescounters.com/images/heroes/92/23.jpg"
        },
        BRIGHTWING: {
            url: "http://www.heroescounters.com/images/heroes/92/24.jpg"
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