if(localStorage.points === undefined){
    		alert("There's no save file, creating one")
	      	localStorage.setItem("points",0)
    	  	localStorage.setItem("ppc",1)
    	  	localStorage.setItem("prestigeLevel",1)
    	}
  		load()
	    function update() {
		    document.body.innerHTML = '';
		    value = value+upgradecount
	      	var prestigegoal = 25000000*prestigelevel
	      	if(value>=prestigegoal) {
	      		document.write("Congratulations! You have enough points. You can <b>Prestige</b> now! <br>")
	      		document.write('<input type="button" value="Prestige" onclick="prestige()">')
	      	} else {
			    document.write(value)
	  		  	document.write("<br>Points Per Click: "+upgradecount)
		   		document.write('<br><input type="button" value="Add 1" onclick="update();" />')
	   	  		document.write(' <input type="button" value="Upgrade" onclick="upgrade();" /> <br>')
	   		  	document.write('<input type="button" value="Save" onclick="save()">')
		   		document.write(' <input type="button" value="Load" onclick="load()">')
	      	}
	    }
      
      function upgrade() {
      	var requirement = upgradecount * 10
      	if(value>=requirement) {
      		value = value - requirement
      		upgradecount = upgradecount * 2 * prestigelevel
      		afterupgrade();
      	}
      }
      
      function afterupgrade() {
      	document.body.innerHTML = '';
      	document.write(value)
      	document.write("<br>Points Per Click: "+upgradecount)
      	document.write('<br><input type="button" value="Add 1" onclick="update();" />')
      	document.write(' <input type="button" value="Upgrade" onclick="upgrade();" /> <br>')
      	document.write('<input type="button" value="Save" onclick="save()">')
      	document.write(' <input type="button" value="Load" onclick="load()">')
      }
      
      function load() {
      	value = parseInt(localStorage.getItem("points"))
      	upgradecount = parseInt(localStorage.getItem("ppc"))
      	prestigelevel = parseInt(localStorage.getItem("prestigeLevel"))
      	afterupgrade();
      }
      
      function save() {
      	localStorage.setItem("points",value)
      	localStorage.setItem("ppc",upgradecount)
      	localStorage.setItem("prestigeLevel",prestigelevel)
      }
      
      //function importsave() {
//      	localStorage.setItem("pointsTest",localStorage.getItem("points"))
//      	localStorage.setItem("ppcTest",localStorage.getItem("ppc"))
//      	load();
//      }
      
      function prestige() {
      	prestigelevel = prestigelevel*2
      	value = 0
      	upgradecount = 1
      	save()
      	afterupgrade()
      }
