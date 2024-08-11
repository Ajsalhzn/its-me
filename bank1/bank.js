let balance = 0;

    function deposit() {
      let depositAmount = parseFloat(document.getElementById('depositAmount').value);
      if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        document.getElementById('depositAmount').value = '';
      } else {
        alert('Please enter a valid deposit amount.');
      }
    }

    function withdraw() {
      let withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
      if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
          balance -= withdrawAmount;
          document.getElementById('withdrawAmount').value = '';
        } else {
          alert('Insufficient balance.');
        }
      } else {
        alert('Please enter a valid withdrawal amount.');
      }
    }

    function showBalance() {
      document.getElementById('balance').innerText = `Current Balance: $${balance.toFixed(2)}`;
    }