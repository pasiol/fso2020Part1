import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =({label, onClick}) =>{
  console.log("Button props:",label, onClick)
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

const Counter =({votes}) => {
  console.log("Counter votes:", votes)
  return (
    <div>
      <p>has votes {votes}</p>
    </div>
  )
}

const MostVoted =({mostVotedAnecdote, mostVotedAnecdoteVotes}) => {
  return (
    <div>
      <h1>Anecdote with most voted</h1>
        <p>{mostVotedAnecdote}</p>
        <p>has votes {mostVotedAnecdoteVotes}</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [selectedVotes, setSelectedVotes] = useState(0)
  const [mostVoted, setMostVoted] = useState('If it hurts, do it more often')
  const [maxVotes, setMaxVotes] = useState(0)

  const handleVoteClick = (selected) => {
    console.log("Vote clicked", selected)
    const copyOfVotes = { ...votes }
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
    setSelectedVotes(copyOfVotes[selected])
    if (copyOfVotes[selected]>maxVotes) {
      setMostVoted(anecdotes[selected])
      setMaxVotes(copyOfVotes[selected])
    }
    console.log("Votes", copyOfVotes)
  }

  const handleNextClick = () => {
    var next_anecdote = Math.floor(Math.random()*anecdotes.length)
    setSelected(next_anecdote)
    setSelectedVotes(votes[next_anecdote])
    console.log("Next clicked")
  }

  return (
    <React.Fragment>
      {props.anecdotes[selected]}
      <Counter votes={selectedVotes} />
      <Button label="vote" onClick={() => handleVoteClick(selected)} />
      <Button label="next anecdote" onClick={handleNextClick} />
      <MostVoted mostVotedAnecdote={mostVoted} mostVotedAnecdoteVotes={maxVotes}/>
    </React.Fragment>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
