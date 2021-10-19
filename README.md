
# Menu Mobile

Exemple de menu de navigation a afficher sur vos
app en version mobile et/ou tablettes

## Demo

https://gabrielvoissiere.github.io/mobile_menu/

## Usage

#### Copy/paste the script in the HTML

```html
    <!-- cdn script (anime.js) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <!-- config script -->
    <script src="script.js"></script>
```

#### Copy/paste the HTML 

```html
    <div id="menu" class="menu">
        <div id="round" class="round"></div>
        <div id="item4" class="item">
            <p>1</p>
        </div>
        <div id="item5" class="item">
            <p>2</p>
        </div>
        <div id="item2" class="item">
            <p>3</p>
        </div>
        <div id="item3" class="item">
            <p>4</p>
        </div>
        <div id="item1" class="item">
            <p>5</p>
        </div>
    </div>
```

#### Copy/paste the CSS 

```css
.menu {
    /* /* don't touch */ */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* --------------- */
    margin-top: 50vh;
}

.round {
    /* /* don't touch */ */
    z-index: 999;
    background-color: var(--round-color);
    /* --------------- */
    width: 10vh;
    height: 10vh;
    border-radius: 100%;
}

.item {
    /* don't touch */
    background-color: var(--item-color);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* --------------- */
    border-radius: 100%;
    width: 8vh;
    height: 8vh;
}
```

#### Copy/paste the animation you want

anim n°1

```javascript
document.querySelector("#round").addEventListener("click", function () {
    anime({
        targets: '#round',
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
```

anim n°2

```javascript
document.querySelector("#round").addEventListener("click", function () {
    anime({
        targets: '#round',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1200,
        direction: 'alternate'
    })

    anime({
        targets: "#item1",
        translateX: 80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
    })

    anime({
        targets: "#item2",
        translateY: -80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 200
    })

    anime({
        targets: "#item3",
        translateX: 65,
        translateY: -65,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 100
    })

    anime({
        targets: "#item4",
        translateX: -80,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 400
    })

    anime({
        targets: "#item5",
        translateX: -65,
        translateY: -65,
        duration: 1000,
        endDelay: 1000,
        direction: 'alternate',
        delay: 300
    })
})
```

anime n°3 

```javascript
document.querySelector("#round").addEventListener("click", function () {
    anime({
        targets: '#round',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1500,
        direction: 'alternate'
    })

    anime({
        targets: ("#item1"),
        translateY: -60,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item2"),
        translateY: -120,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item3"),
        translateY: -180,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item4"),
        translateY: -240,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })

    anime({
        targets: ("#item5"),
        translateY: -300,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })
})
```

anim n°4

```javascript
document.querySelector("#round").addEventListener("click", function () {
    anime({
        targets: '#round',
        duration: 1000,
        backgroundColor: roundColor,
        endDelay: 1700,
        direction: 'alternate'
    })

    anime({
        targets: ("#item1"),
        translateY: -60,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 400
    })

    anime({
        targets: ("#item2"),
        translateY: -120,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 300
    })

    anime({
        targets: ("#item3"),
        translateY: -180,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 200
    })

    anime({
        targets: ("#item4"),
        translateY: -240,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate',
        delay: 100
    })

    anime({
        targets: ("#item5"),
        translateY: -300,
        duration: 1500,
        endDelay: 1000,
        direction: 'alternate'
    })
})
```



  