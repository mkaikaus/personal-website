import React from "react";
import GitHubCalendar from 'react-github-calendar';

function Calender() {
    const colorTheme = {
        light: ['#ffebee', '#ffcdd2'], 
        dark: ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#FF4D4D'], 
    };

    return (
        <>
            {/* <h2 class="text-center p-10 text-3xl font-bold text-red-400">My GitHub Contributions</h2>
            <div style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}>


                <GitHubCalendar
                    username="mkaikaus"
                    hideColorLegend
                    labels={{
                      totalCount: '{{count}} contributions in the last half year',
                    }}
                    blockSize={15}
                    blockMargin={5}
                    theme={colorTheme}
                    fontSize={16}

                />
            </div> */}
        </>
    );
}

export default Calender;


