// Bar Chart
const labels = [
    '1 December',
    '2 December',
    '3 December',
    '4 December',
    '5 December',
    '6 December',
    '7 December',
    '8 December',
    '9 December',
    '10 December',
    '11 December',
    '12 December',
    '13 December',
    '14 December'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Cases',
        backgroundColor: 'lightblue',
        borderColor: 'white',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
    }]
};

const config = {
    type: 'bar',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Pie Chart
const labels2 = ['Total Cases', 'Hospitalized', 'Deaths'];

const data2 = {
    labels: labels2,
    datasets: [{
        backgroundColor: ['lightblue', 'red', 'black'],
        borderColor: ['lightblue', 'red', 'black'],
        data: [257510, 1365, 678],
    }]
};

const config2 = {
    type: 'pie',
    data: data2,
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);

