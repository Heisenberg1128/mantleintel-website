export function ControlDiagram() {
  return (
    <div className="control-diagram" aria-label="Mantle control layer architecture">
      <div className="diagram-rail" aria-hidden="true" />
      <div className="diagram-node diagram-input">
        <span>01</span>
        <strong>People + agents</strong>
        <small>Task · context · intent</small>
      </div>
      <div className="diagram-core">
        <span className="core-label">Control layer</span>
        <strong>Mantle</strong>
        <div className="core-grid">
          <span>Policy</span><span>Permissions</span><span>Approval</span><span>Evidence</span>
        </div>
      </div>
      <div className="diagram-node diagram-output">
        <span>03</span>
        <strong>Approved AI</strong>
        <small>Clean context · permitted action</small>
      </div>
      <div className="payload-pulse" aria-hidden="true" />
    </div>
  );
}

