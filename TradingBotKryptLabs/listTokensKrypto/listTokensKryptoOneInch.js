async function parseTokens() {
    try { let response = await fetch('https://api.1inch.exchange/v3.0/1/tokens');
          let tokens = await response.json();
          let tokenList = Object.values(tokens.tokens);


          let listItems = tokenList.map(token =>
 `<li>${token.name} (${token.symbol}): ${token.address}</li>`);
                
                document.body.innerHTML += 
`<ul>${listItems.join('')}</ul>`;
        }
            catch(e) { console.log(`Error: ${e}`);
}
}
