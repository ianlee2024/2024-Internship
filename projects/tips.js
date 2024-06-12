slider.addEventListener('input', function() 
                {
                    var output = document.getElementById('tipAmount');
                    output.textContent = this.value;
                });
                function addNumbers() 
                {
                    var subtotal = parseFloat(document.getElementById('billAmount').value);
                    var tip_rate = parseFloat(document.getElementById('slider').value);
                    var result = subtotal * (1 + tip_rate / 100);
                    document.getElementById('result').textContent = result;
                }
                function Add(){
                    var quotient = Math.round(subtotal * tip_rate) / 100
                    document.getElementById('tipresult').textContent = tipresult;
                    }