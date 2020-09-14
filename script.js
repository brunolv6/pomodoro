let stage = "Pomodoro";

const Pomodoro = {

    buttonsAction: () => {
        $('.c--pomodoro-break>div').on('click', () => {
            stage = 'Pomodoro';
            $('body').addClass('b--pomodoro-on');
            $('.b-message').text('Estado Focado')
        })

        $('.c--resume-break>div').on('click', () => {
            stage = 'Resume';
            $('body').addClass('b--resume-break');
            $('.b-message').text('Pontos Centrais')
        })

        $('.c--short-break>div').on('click', () => {
            stage = 'Short';
            $('body').addClass('b--short-break');
            $('.b-message').text('Estado Difuso')
        })

        $('.b-controls-start').on('click', () => {
            Pomodoro.startOn();
        })
    },

    startOn: () => {
        switch (stage) {
            case 'Pomodoro':
                Pomodoro.pomodoroTimer();
                break;
            case 'Resume':
                Pomodoro.resumeBreak();
                break
            case 'Short':
                Pomodoro.shortBreak()
                break;
            default:
                alert('Aparentemente houve um problema, porfavor reinicie o site');
        }
    },

    pomodoroTimer: () => {
        Pomodoro.changeColorPomodoro();

        let time = parseInt($('.c--pomodoro-break>input').val())*60000;

        setTimeout(() => {
            stage = 'Resume';
            document.getElementById('b--sound').play();
            Pomodoro.startOn();
        }, time);
    },

    resumeBreak: () => {
        Pomodoro.changeColorResume();

        let time = parseInt($('.c--resume-break>input').val())*60000;

        setTimeout(() => {
            stage = 'Short';
            document.getElementById('b--sound').play();
            Pomodoro.startOn();
        }, time);
    },

    shortBreak: () => {
        Pomodoro.changeColorShort();

        let time = parseInt($('.c--short-break>input').val())*60000;

        setTimeout(() => {
            stage = 'Pomodoro';
            document.getElementById('b--sound').play();
            Pomodoro.startOn();
        }, time);
    },

    changeColorPomodoro: () => {
        $('body').addClass('b--pomodoro-on');
        $('.b-message').text('Estado Focado')

        var interval = setInterval(() => {
            $('.b-body-effect').toggleClass('b--expanded');

            if(stage != "Pomodoro"){
                clearInterval( interval );
                $('body').removeClass('b--pomodoro-on');
                $('.b-body-effect').removeClass('b--expanded');
            }
        }, 1900);
    },

    changeColorResume: () => {
        $('body').addClass('b--resume-break');
        $('.b-message').text('Pontos Centrais')

        var interval = setInterval(() => {
            $('.b-body-effect').toggleClass('b--expanded');

            if(stage != "Resume"){
                clearInterval( interval );
                $('body').removeClass('b--resume-break');
                $('.b-body-effect').removeClass('b--expanded');
            }
        }, 1900);
    },

    changeColorShort: () => {
        $('body').addClass('b--short-break');
        $('.b-message').text('Estado Difuso')

        var interval = setInterval(() => {
            $('.b-body-effect').toggleClass('b--expanded');

            if(stage != "Short"){
                clearInterval( interval );
                $('body').removeClass('b--short-break');
                $('.b-body-effect').removeClass('b--expanded');
            }
        }, 1900);
    }
}

$(document).ready(() => {
    Pomodoro.buttonsAction();
})

// setTimeout(() => {
//     document.getElementById('xyz').play();
//     alert("Acabou seu pomodoro, resuma os pontos centrais do que aprendeu");
    
//     setTimeout(() => {
//         document.getElementById('b--sound').play();
//         alert('Acabou seu tempo de resumo, aproveite seu tempo difuso - descanse, se mova, interaja..')
    
//         setTimeout(() => {
//             document.getElementById('xyz').play();
//             alert('Seu tempo difuso acabou, hora de focar novamente')
//         }, 360000) 

//     }, 300000) 

// }, 1500000)
// https://www.sessions.edu/color-calculator/