let printData = () => {
    let basicpay = parseInt(document.getElementById("bpay").value);
    let hr = parseInt(document.getElementById("hra").value = basicpay * (10 / 100));
    let da = parseInt(document.getElementById("da").value = basicpay * (5 / 100));
    let travel = parseInt(document.getElementById("trav").value = basicpay * (15 / 100));
    let pfund = parseInt(document.getElementById("pf").value = basicpay * (15 / 100));
    let gross = parseInt(document.getElementById("gross").value =basicpay+ hr + da + travel + pfund);
    let netsal = parseInt(document.getElementById("net").value = gross - pfund);
  }
  document.getElementById("bpay").addEventListener('keyup', printData);
  
  let printtable =()=>{
      
    let basicpay = document.getElementById("bpay").value;
    let hr = document.getElementById("hra").value;
    let da = document.getElementById("da").value;
    let travel = document.getElementById("trav").value;
    let pfund = document.getElementById("pf").value;
    let gross = document.getElementById("gross").value;
    let netsal = document.getElementById("net").value;
  
      document.getElementById("pri").innerHTML+=
      `<tr>
      <td>${basicpay}</td>
      <td>${hr}</td>
      <td>${da}</td>
      <td>${travel}</td>
      <td>${pfund}</td>
      <td>${gross}</td>
      <td>${netsal}</td>
      </tr>`
  }
  document.getElementById("print").addEventListener('click', printtable);