import react from "react";

export default function Card(props) {
  return (
    <div class="card">
      <div class="info">
        <p>{props.details}</p>
        {/* There is no Sore it will Not Heal, No cool it will not Subdue. */}
      </div>
    </div>
  );
}
