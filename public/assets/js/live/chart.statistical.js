const chart = {
    initChart: function (data, el, elLegend, labels, lineColors) {
        var chart = Morris.Area({
            element: el,
            data: data,
            gridEnabled: true,
            gridLineColor: 'rgba(0,0,0,.1)',
            gridTextColor: '#8f9ea6',
            gridTextSize: '11px',
            behaveLikeLine: true,
            smooth: true,
            xkey: 'month',
            ykeys: ['count'],
            labels: labels,
            lineColors: lineColors,
            pointSize: 0,
            pointStrokeColors: ['#045d97'],
            lineWidth: 0,
            resize: true,
            hideHover: 'auto',
            fillOpacity: 0.9,
            parseTime: false
        });

        chart.options.labels.forEach(function (label, i) {
            const legendItem = $("<div class='morris-legend-items'></div>").text(label);
            $("<span></span>").css("background-color", chart.options.lineColors[i]).prependTo(legendItem);
            $(`#${elLegend}`).append(legendItem);
        });
    },
    initChartDoughnut: function (data, el) {
        Morris.Donut({
            element: el,
            data: data,
            colors: [
                '#ec407a',
                '#03a9f4',
                '#498aad',
                '#c6af5b',
                '#cc633b'
            ],
            resize: true
        });
    }
}