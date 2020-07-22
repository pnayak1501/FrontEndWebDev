    var
    keyList="abcdefghijklmnopqrstucwxyz1234567890!@#$%^&*";
    var tmp="";
        function generatePass(plength){
            tmp='';
            for(i=0;i<plength;i++){
                tmp+=keyList.charAt(Math.floor(Math.random()*keyList.length));
            }
            return tmp;
        }
    function populateForm(enterlength){
        document.passGen.output.value=generatePass(enterlength);
    }    