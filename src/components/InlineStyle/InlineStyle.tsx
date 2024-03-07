const InlineStyle = () => {
  const darkMode = false

  const containerStyle = {
    'backgroundColor': darkMode ? 'pink' : 'purple',
    'border': '5px solid black'
  }

  const paragraphStyle = {
    'color': 'orange'
  }

  return (
    <div style={containerStyle}>
      <h2 style={{ 'fontSize': darkMode ? '1.4rem' : '1rem' }}>Inline Style:</h2>
      <p style={paragraphStyle}>This is the inline style component.</p>
    </div>
  )
}

export default InlineStyle