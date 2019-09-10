var leCube = document.getElementById('leCube');

        // var tableau_liens = [bibi, cecile, devon, joyce, mathieu, morghan];

        var bibi = document.getElementById('bibi');
        bibi.addEventListener('mouseover', tournerCubeBibi);

        var cecile = document.getElementById('cecile');
        cecile.addEventListener('mouseover', tournerCubeCecile);

        var devon = document.getElementById('devon');
        devon.addEventListener('mouseover', tournerCubeDevon);

        var joyce = document.getElementById('joyce');
        joyce.addEventListener('mouseover', tournerCubeJoyce);

        var mathieu = document.getElementById('mathieu');
        mathieu.addEventListener('mouseover', tournerCubeMathieu);

        var morghan = document.getElementById('morghan');
        morghan.addEventListener('mouseover', tournerCubeMorghan);

        //////////////////////////////////////////////////////////

        var page_bibi = document.getElementById('face_avant');
        page_bibi.addEventListener('click', changeTexteBibi);
        function changeTexteBibi() {
            page_bibi.innerHTML = "<br>&mdash;une bière<br>&mdash;un burger<br>&mdash;un chown 777<br>...Kernel Panic...<br>...Adieu, maître...";
        }

        var page_cecile = document.getElementById('face_droite');
        page_cecile.addEventListener('click', site_cecile);

        var page_devon = document.getElementById('face_gauche');
        page_devon.addEventListener('click', site_devon);
        
        var page_joyce = document.getElementById('face_bas');
        page_joyce.addEventListener('click', site_joyce);

        var page_mathieu = document.getElementById('face_arriere');
        page_mathieu.addEventListener('click', site_mathieu);

        var page_morghan = document.getElementById('face_haut');
        page_morghan.addEventListener('click', site_morghan);

