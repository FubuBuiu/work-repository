'use client';
import { ArcElement, Chart, defaults } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { backgroundColor, borderColor } from '../constants/constants';

Chart.register(ChartDataLabels);
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.legend.display = true;
defaults.plugins.title.display = true;

const DoughnutChart = ({ data, itemHover }: { data: { label: string; value: number }[]; itemHover: (data: number) => void }) => (
    <div className='mt-4 flex h-96 w-full max-w-fit flex-col items-center justify-center p-4'>
        <Doughnut
            data={{
                datasets: [
                    {
                        label: 'Valor',
                        data: data.map(data => data.value),
                        backgroundColor: backgroundColor,
                        borderColor: borderColor
                    }
                ]
            }}
            options={{
                responsive: true,
                spacing: 1,
                onClick: function (_: unknown, item: { element: ArcElement; datasetIndex: number; index: number }[]) {
                    if (item.length > 0) {
                        return itemHover(item[0].index);
                    }
                    itemHover(-1);
                },
                onHover(_, elements, chart) {
                    if (elements[0]) {
                        chart.canvas.style.cursor = 'pointer';
                    } else {
                        chart.canvas.style.cursor = 'default';
                    }
                },
                plugins: {
                    datalabels: {
                        font: {
                            size: 16
                        },
                        anchor: 'end',
                        align: 'end',
                        formatter: (value: number) => value
                    },
                    legend: { display: false },
                    title: {
                        display: false
                    }
                }
            }}
        />
    </div>
);

export { DoughnutChart };
