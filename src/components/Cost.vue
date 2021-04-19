<template>
  <section>
    <Navbar></Navbar>
    <div class="main">

      <h1>Oblisz koszt nadania wysyłki</h1>
      <div class="container-fluid w-50">
        <br>
        <span style="font-size:20px;">Wpisz dane przesyłki</span>
        <br>
        <br>
          <form>
            <div class="form-group">
              <input type="number" min="10" max="200" onKeyDown="return false" class="form-control" v-model="height" placeholder="Wysokość w cm">
            </div>
            <div class="form-group">
              <input type="number" min="10" max="200" onKeyDown="return false" class="form-control" v-model="width" placeholder="Szerokość w cm">
            </div>
            <div class="form-group">
              <input type="number" min="1" max="200" onKeyDown="return false" class="form-control" v-model="depth" placeholder="Głębokość w cm">
            </div>
            <div class="form-group">
              <input type="number" min="1" max="100" onKeyDown="return false" class="form-control" v-model="weight" placeholder="Waga w kg">
            </div>
            <p><strong>Koszt twojej przesyłki wynosi {{costs().toFixed(2)}} zł.</strong></p>
          
          </form>
        
      </div>
    </div>


    
  </section>

</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Cost',
  components: {
    Navbar: Navbar,
  },
  data(){
    return {
      height: "",
      width: "",
      depth: "",
      weight: "",
      count: "0"
    }
  },
  methods: {
    costs: function(){
      
      const num1 = 13
      const num2 = 17
      const num3 = 24
      if (this.height<=50 && this.width<=30 && this.depth<=30) {
        this.count=(parseInt(num1)+(2*parseInt(this.weight)))+((parseInt(num1)+(2*parseInt(this.weight)))*0.2)
      }
      else if(this.height<=80 && this.width<=50 && this.depth<=50){
        this.count=(parseInt(num2)+(2*parseInt(this.weight)))+((parseInt(num2)+(2*parseInt(this.weight)))*0.2)
      }
      else{
        this.count=((parseInt(num3)+(2*parseInt(this.weight)))+(parseInt(num3)+(2*parseInt(this.weight)))*0.2)
      }
      var sum = this.count;
      if (isNaN(sum)) sum=0;
      return sum;
    }
  }
}
</script>
