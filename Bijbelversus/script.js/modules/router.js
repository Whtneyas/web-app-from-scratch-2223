

function onRouteChanged() {
    console.log("window.location.hash");
    const hash = window.location.hash;
    const routerView = document.getElementById("router-view");
  
    if (!(routerView instanceof HTMLElement)) {
      throw new ReferenceError("No router view element available for rendering");
    }
  
    switch (hash) {
      case "#home":
        window.location = "index.html"
        
        break;
  
      case "#about": 
        routerView.innerHTML = `
        
        <section id="About" >

        <h4>About</h4>
        <article>
            <details>
                <summary>Author of the Book</summary>
                <p>Paul is the Autho of the book.Paul had never been to Rome when he wrote the letter to the Romans,
                    though he had clearly expressed his desire to travel there in the near future <span>Acts 19:21;
                        Romans
                        1:10–12</span> . The apostle greeted twenty-six
                    different people by name, personalizing a letter from a man who would have been a personal
                    stranger
                    to most of the recipients. No doubt they had heard of Paul and would have been honored by the
                    letter, but Paul always took opportunities to personally connect with his audience
                    so that the message of the gospel might be better received.</p>
            </details>
  
        </article>
  
        <article>
            <details>
                <summary> Where are we?</summary>
                <p>The apostle Paul wrote to the Romans from the Greek city of <span>Corinth in AD 57,</span> just
                    three
                    years after
                    the 16-year-old Nero had ascended to the throne as Emperor of Rome. The political situation in
                    the
                    capital had not yet deteriorated for the Roman Christians, as Nero wouldn’t begin his
                    persecution of
                    them until he made them scapegoats after the great Roman fire in AD 64. Therefore, Paul wrote to
                    a
                    church that was experiencing a time of relative peace, but a church that he felt needed a strong
                    dose of basic gospel doctrine.
  
                    Writing from Corinth, Paul likely encountered a diverse array of people and practices—from gruff
                    sailors and meticulous tradesmen to wealthy idolaters and enslaved Christians. The prominent
                    Greek
                    city was also a hotbed of sexual immorality and idol worship. So when Paul wrote in Romans about
                    the
                    sinfulness of humanity or the power of God’s grace to miraculously and completely change lives,
                    he
                    knew that of which he spoke. It was played out before his eyes every day.</p>
            </details>
        </article>
  
        <article>
            <h4>
  
            </h4>
            <details>
                <summary>What's the big idea?</summary>
                <p>The primary theme running through Paul’s letter to the Romans is the revelation of God’s
                    righteousness in His plan for salvation, what the Bible calls the gospel:
  
                    For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who
                    believes, to the Jew first and also to the Greek. For in it the righteousness of God is revealed
                    from faith to faith; as it is written, “But the righteous man shall live by faith.” (Romans
                    1:16–17)
  
                    Paul showed how human beings lack God’s righteousness because of our sin (1–3), receive God’s
                    righteousness when God justifies us by faith (4–5), demonstrate God’s righteousness by being
                    transformed from rebels to followers (6–8), confirm His righteousness when God saves the Jews
                    (9–11), and apply His righteousness in practical ways throughout our lives (12–16).</p>
            </details>
        </article>
  
  
        <article>
            <details>
                <summary>How do i apply thisd</summary>
                <p>The structure of Romans provides a hint into the importance of the book in our everyday lives.
                    Beginning with eleven chapters of doctrine, the book then transitions into five chapters of
                    practical instruction. This union between doctrine and life illustrates for Christians the
                    absolute importance of both what we believe and how we live out those beliefs. Does your
                    day-to-day life mirror the beliefs you hold, or do you find yourself in a constant battle with
                    hypocrisy? Take heed of the doctrine you find within the pages of Romans, but don’t forget to
                    put it into practice as well.</p>
            </details>
        </article>
  
       </section>
  
 ` ;
        break;
  
  
      default:
        routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
        break;
  
  
    }
  }
  export default onRouteChanged
  