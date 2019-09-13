<div class='container'>
  <div class='sq'>
    <div class='circle'>
    </div>
  </div>
   <div class='sq'>
    <div class='circle'>
    </div>
  </div>
   <div class='sq'>
    <div class='circle'>
    </div>
  </div>
</div>
//by flex
.container {
  border: 1px solid black;
  display: flex;
}

.sq {
  height:100px;
  width: 100px;
  display: flex;
  background-color: red;
  margin: 10px;
  
}

.circle {
  height: 50px;
  width:  50px;
  border-radius: 50%;
  margin: auto;
  background-color: yellow;
}

//by transform
.container {
  border: 1px solid black;

}

.sq {
  height:100px;
  width: 100px;
  background-color: red;
  margin: 10px;
  display: inline-block;
}

.circle {
  height: 50px;
  width:  50px;
  border-radius: 50%;
  margin: 50% 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
}
