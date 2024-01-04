const text = [
    `The pacers had a dream outing as 23 wickets fell out of which 22 were taken by the fast bowlers on Day 1 of the second Test match at Newlands, Cape Town. The batters had a forgettable day. Interestingly, it is the second-most number of wickets that fell on the first day of a Test match and the joint-most on the Proteas’ soil.`,
    `first session was dominated by a brilliant spell of Mohammed Siraj, who claimed a six-wicket haul as South Africa were bundled for just 55 in the first innings. In reply, India managed to take the lead quite comfortably at Tea with Virat Kohli and KL Rahul in the middle. Meanwhile, the tables turned completely in the final session where India suffered one of the most embarrassing collapses in history `,
    `Days ahead of the inauguration of the Ram temple in Ayodhya, Karnataka Congress MLC BK Hariprasad on Wednesday stoked a fresh row saying that riots like Godhra might take place in the state and asked the central government to provide security to the people going to the holy city in Uttar Pradesh.`,
    `There is a possibility of ‘Godhra-like incident’ in Karnataka in the run up to the consecration ceremony of Ram temple in Ayodhya on January 22. The Karnataka government should be alert because in Gujarat during the same occasion, the Kar Sevaks were set on fire at Godhra,`,
    `“2002 Godhra train burning case had plunged Gujarat into one of the worst communal riots. So, no room should be given for any untoward incident to happen in Karnataka. All the arrangements should be made for those willing to go to Ayodhya so that we should not see another Godhra happening`,
    `My knowledge tells me that the four Shankaracharyas are the head of the Hindu religion. If the four Shankaracharyas or any religious head had inaugurated the event then I would have attended the event. Prime Minister Narendra Modi and Home Minister Amit Shah are not ‘Dharma Guru’ but political leaders. We have to consider this,” he added.`,
    `Meanwhile, the Congress leader’s comments came after the BJP, in response to the arrest of Hindu activist Srikanth Poojary, alleged that the Siddaramaiah-led Congress government in Karnataka is reopening old cases related to the demolition of the Babri Masjid that took place in 1992.`,
    `Karnataka BJP leader KS Eshwarappa also slammed Hariprasad for his remarks and said, “It is surprising to see leaders like BK Hariprasad speaking this kind of language. Former PM Rajiv Gandhi had also supported Ram Mandir. Lord Ram himself will safeguard the devotees who visit Ayodhya.”`
];
const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const value =parseInt(amount.value);
  if(isNaN(value) || value < 0 || value > 9 ){
    result.innerHTML = `<p class="result">${text[0]}</p>`;
  }else{
    let tempText = text.slice(0, value);
    tempText = tempText.map(function (item){
        console.log(item)
        return `<p class="result">${item}</p>`
    }).join("");
    result.innerHTML = tempText;
  }
})