import customStyle from './CSSModules.module.css'

const CSSModules = () => {
  return (
    <div className={customStyle.container}>
      <h2 className={customStyle.heading}>CSS Modules:</h2>
      <p className={customStyle.paragraph}>This is the CSS Modules component.</p>
    </div>
  )
}

export default CSSModules