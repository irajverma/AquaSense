fetch('https://7ee6gxhkc3.execute-api.us-east-1.amazonaws.com/latest').then(r => r.text().then(t => console.log(r.status, t)));
