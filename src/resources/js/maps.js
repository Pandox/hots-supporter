if (typeof (HOTS) === 'undefined') {
    HOTS = {};
}
if (typeof (HOTS.MAPS) === 'undefined') {
    HOTS.MAPS = {};
}


HOTS.MAPS = (function() {

    function renderHero(heroURL) {
        var template = bestHeroTemplate.join("\n");
        template = template.replace("{{heroURL}}", heroURL);

        $("#best-hero-container").append(template);
    }

    var load = function(data){
        data.heroes.forEach(function (dataHero) {
            var heroURL = HOTS.HEROES.heroData(dataHero).url;
            renderHero(heroURL);
        });
    };

    var bestHeroTemplate = [
        '<div class="col-xs-4">',
        '   <div class="hero-avatar">',
        '       <div class="avatar"><div style="background-image:url({{heroURL}});"></div></div>',
        '       <div class="frame"></div>',
        '    </div>',
        '</div>'
    ];

    return {
        load: load
    }
})();