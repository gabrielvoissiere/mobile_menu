let roundColor = '#2931a0'

// menu n°1
document.querySelector("#round1").addEventListener("click", function () {
    anime({
        targets: '#round1',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: "#item1",
        translateX: 80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: "#item2",
        translateY: -80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: "#item3",
        translateX: 65,
        translateY: -65,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: "#item4",
        translateX: -80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: "#item5",
        translateX: -65,
        translateY: -65,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate'
    })
})

// menu n°2
document.querySelector("#round2").addEventListener("click", function () {
    anime({
        targets: '#round2',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1200,
        direction: 'alternate'
    })

    anime({
        targets: "#item2-1",
        translateX: 80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
    })

    anime({
        targets: "#item2-2",
        translateY: -80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 200
    })

    anime({
        targets: "#item2-3",
        translateX: 65,
        translateY: -65,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 100
    })

    anime({
        targets: "#item2-4",
        translateX: -80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 400
    })

    anime({
        targets: "#item2-5",
        translateX: -65,
        translateY: -65,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 300
    })
})

// menu n°3
document.querySelector("#round3").addEventListener("click", function () {
    anime({
        targets: '#round3',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1500,
        direction: 'alternate'
    })

    anime({
        targets: ("#item3-1"),
        translateY: -60,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item3-2"),
        translateY: -120,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item3-3"),
        translateY: -180,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item3-4"),
        translateY: -240,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item3-5"),
        translateY: -300,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })
})

// menu n°4
document.querySelector("#round4").addEventListener("click", function () {
    anime({
        targets: '#round4',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1700,
        direction: 'alternate'
    })

    anime({
        targets: ("#item4-1"),
        translateY: -60,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 400
    })

    anime({
        targets: ("#item4-2"),
        translateY: -120,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 300
    })

    anime({
        targets: ("#item4-3"),
        translateY: -180,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 200
    })

    anime({
        targets: ("#item4-4"),
        translateY: -240,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 100
    })

    anime({
        targets: ("#item4-5"),
        translateY: -300,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })
})