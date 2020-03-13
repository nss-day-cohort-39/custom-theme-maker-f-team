export const Score = score => `
    <section class="score" id="score--${score.id}">
        <header class="score__header">
            <h2>${score.team}</h2>
        </header>
        <p class="score__points">Score: ${score.points}</p>
        <p class="score__date">Date: ${new Date(score.timestamp).toLocaleDateString('en-US')}</p>
    </section>
`