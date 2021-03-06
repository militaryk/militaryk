body {

  font-family: 'Open Sans', Arial, sans-serif;

  background: #333;

  margin: 0;

}



header {

  text-align: center;

  font-size: 6vmin;

  color: #ddd;

  background: #555;

  box-shadow: 0 20px 50px #000;

  border-radius: 1em;

  margin: 1em;

  padding: 1em 2em;

}



header h1 {

  margin: 0;

}



@media (min-width: 720px) {

  header {

    position: fixed;

    top: 1em;

    left: -2em;

    font-size: 1em;

  }



  main {

    margin-top: 150px;

  }

}



.progress-wrapper {

  margin: 3em;

}



.progress {

  margin: auto;

  width: 3em;

  height: 3em;

}



.progress .indeterminate {

  width: 100%;

  height: 100%;

  border-radius: 0.5em;

  background: red;

  animation: spin 3s linear infinite;

}



@keyframes spin {

  0% {

    transform: rotate(0deg);

    background: red;

  }

  12.5% {

    background: orange;

  }

  25% {

    background: yellow;

  }

  37.5% {

    background: lime;

  }

  50% {

    background: limegreen;

  }

  62.5% {

    background: cyan;

  }

  75% {

    background: blue;

  }

  87.5% {

    background: magenta;

  }

  100% {

    transform: rotate(720deg);

    background: red;

  }

}



.project-grid {

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  grid-auto-rows: 1fr;

  grid-auto-flow: row dense;

  grid-gap: 2em;

  margin: 5em 0;

}



.project-grid .m {

  grid-column: span 1;

  grid-row: span 1;

}



.project-grid .w {

  grid-column: span 2;

  grid-row: span 1;

}



.project-grid .l {

  grid-column: span 2;

  grid-row: span 2;

}



@media (max-width: 600px) {

  .project-grid {

    display: block;

  }

}



.card {

  box-shadow: 0 5px 20px #000;

  border-radius: 0.5em;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  justify-content: flex-end;

}



.card-content {

  margin-top: 1em;

  padding: 0.5em;

  background: linear-gradient(transparent, #33333380);

  color: #ddd;

}



.card-content .right {

  color: #fff;

}



.card-title {

  font: 1.5em 'Lato', Verdana, Arial, sans-serif;

  margin: 0.1em;

  text-shadow: 0 3px 5px #33333380;

  color: #fff;

  text-transform: lowercase;

}



.card-title .octicon {

  font-size: 1.2em;

  margin: 0 0.5em;

}



.card-action {

  background: #33333380;

  text-align: right;

}



.card-action a {

  display: inline-block;

  margin: 0.5em 1em;

  padding: 0 0.5em;

  text-transform: uppercase;

  text-decoration: none;

  color: white;

  transition: text-shadow 0.2s, box-shadow 0.2s;

}



.card-action a:last-child {

  border: 2px solid white;

  border-radius: 0.2em;

}



.card-action a:hover {

  text-shadow: 1px 3px 5px #333;

}



.card-action a:last-child:hover {

  text-shadow: none;

  box-shadow: 1px 3px 5px #333;

}



.btn-large {

  display: inline-block;

  box-shadow: 0 5px 20px #000;

  border-radius: 0.5em;

  font-size: 1.5em;

  padding: 0.5em 2em;

  color: white;

  background: linear-gradient(#55f, #00a);

  text-decoration: none;

  text-transform: capitalize;

  transition: box-shadow 0.3s;

}



.btn-large:hover,

.btn-large:active {

  box-shadow: 0 10px 40px #000;

}



footer {

  color: #aaa;

  background: linear-gradient(transparent, #000);

  margin-top: 5em;

  padding: 3em 0;

}



footer a,

.footer-copyright {

  color: #ccc;

}



.container {

  width: 80%;

  margin: 0 auto;

}



.right {

  float: right;

}



.center-align {

  text-align: center;

}



.hide {

  display: none;

}
