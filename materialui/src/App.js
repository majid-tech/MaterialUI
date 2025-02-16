import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>Material UI</h1>
      <Button variant="outlined" color="success"
        onClick={() => console.log('Hello, Material UI!')}
      >Click me</Button>
    </div>
  );
}

export default App;
