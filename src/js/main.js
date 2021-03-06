
(function() {
    $(document).ready(function() {

        // Fonctionnement du menu en mobile
        // ===================================================
        $('header .menu').on('click', function() {
            $('header nav ul').toggleClass('active');
        });

        // Effet Lien Actif
        // ===================================================
        var nav = $('header nav'),
            navItem = nav.find('li a'),
            URI = window.location.pathname,
            URIfragments = URI.split('/'),
            URIpage = URIfragments[2];

        navItem.each(function() {
            if($(this).attr('href') == URIpage) {
                $(this).addClass('current-page');
            }
            else {
                $(this).removeClass('current-page');
            }
        });

        // Annule le comportement des liens "disabled"
        // ===================================================
        var noLink = $('a.disabled')
        noLink.on('click', function(e) {
            e.preventDefault();
        });

        // Carousel Matériel
        // ===================================================
        setInterval(function(){
            var taille = $('.listeImg img').width();
            $(".listeImg").animate({marginLeft:-taille},800,function(){
                $(this).css({marginLeft:0}).find("img:last").after($(this).find("img:first"));
            })
        }, 3500);

        // Retour à la liste du matériel
        // ===================================================
        $('.btn.retourListe').on('click', function(e) {
            e.preventDefault();
            window.history.back(-1);
        });

        // Affichage du pannier
        // ===================================================
        $('.user button.cart').on('click', function() {
            $('.panier').toggleClass('open');
            console.log('bouh');
        });

        // Fermeture du pannier
        // ===================================================
        $('.panier .cross').on('click', function() {
            $('.panier').removeClass('open');
        });

        // Création du calendrier
        // ===================================================
        $('#calendar').eCalendar({url: 'loadCalendar'});

        $('#calendar').eCalendar({
            events: [
                {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2016, 0, 12, 17)},
                {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2016, 0, 23, 16)}
            ]
        });

        $('#calendar').eCalendar({url: 'loadCalendar',
            weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            firstDayOfWeek: 1}); // calendar starting on monday | (0 - 6: week days format)

        //With links on the description
        $('#calendar').eCalendar({
            events: [
                {
                    title: 'Pas de réservations.',
                    description: "Aucun matériel n'a encore été réservé",
                    datetime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes())
                }
            ]
        });
    });
})();