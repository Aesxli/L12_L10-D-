//full page
new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionsColor : ['#FFFFF', '#FFFFF', '#FFFFF'],
        navigation: true,
        slidesNavigation: true,
        anchors:['firstPage', 'secondPage', 'thirdPage' ],
        navigationTooltips: ['first', 'second']
    });
//datatable
    // Add JavaScript to initialise DataTables to the table above
    $(document).ready(function () {
        $('#example').DataTable();
    });
    $('#example').DataTable({
        pageLength: 3,
    });
//tiptool
tippy('#BP', {
    content: 'Centre Name: Bedok Polyclinic <br>' +
            'Address: 213 Bedok North Street 1, #01-111, Singapore 460213 <br>' +
            'Contact: 6343 6688',
    trigger: 'click',
    allowHTML: true
});
tippy('#BBP', {
    content: 'Centre Name: Bukit Batok Polyclinic <br>' +
            'Address: 50 Bukit Batok West Avenue 3, Singapore 659164 <br>' +
            'Contact: 6343 1122',
    trigger: 'click',
    allowHTML: true
});
tippy('#BMP', {
    content: 'Centre Name: Bukit Merah Polyclinic <br>' +
            'Address: 162 Bukit Merah Central Level 4, Singapore 150163 <br>' +
            'Contact: 6343 1123',
    trigger: 'click',
    allowHTML: true
});
tippy('#CCKP', {
    content: 'Centre Name: Choa Chu Kang Polyclinic <br>' +
            'Address: 2 Teck Whye Crescent, Singapore 688846 <br>' +
            'Contact: 	6343 1124',
    trigger: 'click',
    allowHTML: true
});
tippy('#CP', {
    content: 'Centre Name: Clementi Polyclinic <br>' +
            'Address: 451 Clementi Avenue 3, Singapore 120451 <br>' +
            'Contact: 	6343 1125',
    trigger: 'click',
    allowHTML: true
});
tippy('#CP', {
    content: 'Centre Name: Clementi Polyclinic <br>' +
            'Address: 451 Clementi Avenue 3, Singapore 120451 <br>' +
            'Contact: 	6343 1125',
    trigger: 'click',
    allowHTML: true
});
tippy('#GP', {
    content: 'Centre Name: Geylang Polyclinic <br>' +
            'Address: 21 Geylang East Central, Singapore 389707 <br>' +
            'Contact: 	6343 1126',
    trigger: 'click',
    allowHTML: true
});
tippy('#GP', {
    content: 'Centre Name: Geylang Polyclinic <br>' +
            'Address: 21 Geylang East Central, Singapore 389707 <br>' +
            'Contact: 	6343 1126',
    trigger: 'click',
    allowHTML: true
});
tippy('#HP', {
    content: 'Centre Name: Hougang Polyclinic <br>' +
            'Address: 89 Hougang Avenue 4, Singapore 538829 <br>' +
            'Contact: 	6765 1121',
    trigger: 'click',
    allowHTML: true
});
tippy('#HP', {
    content: 'Centre Name: Jurong Polyclinic <br>' +
            'Address: 190 Jurong East Avenue 1, Singapore 609788 <br>' +
            'Contact: 	6765 1122',
    trigger: 'click',
    allowHTML: true
});
tippy('#MPP', {
    content: 'Centre Name: Marine Parade Polyclinic <br>' +
            'Address: 162 Bukit Merah Central Level 4, Singapore 150163 <br>' +
            'Contact: 	6765 1123',
    trigger: 'click',
    allowHTML: true
});
tippy('#OP', {
    content: 'Centre Name: Outram Polyclinic <br>' +
            'Address: 3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937 <br>' +
            'Contact: 	6765 1124',
    trigger: 'click',
    allowHTML: true
});
tippy('#PRP', {
    content: 'Centre Name: Pasir Ris Polyclinic <br>' +
            'Address: 1 Pasir Ris Drive 4, Singapore 519457 <br>' +
            'Contact: 	67651125',
    trigger: 'click',
    allowHTML: true
});
tippy('#PP', {
    content: 'Centre Name: Pioneer Polyclinic <br>' +
            '26 Jurong West Street 61, Singapore 648201 <br>' +
            'Contact: 	67651126',
    trigger: 'click',
    allowHTML: true
});
