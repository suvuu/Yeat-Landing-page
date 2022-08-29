import React from "react";

import './video.css'



export default function Video() {
    return (
        <div className="second-section">

            <div className="overlay">
            <p className="title">Tour</p>
            <form>
                <aside className="tour-content">
                <p>9/17 - Boston, MA - Brighton Music Hall</p>
                <p>9/18 - New York, NY - Irving Plaza      </p>
                <p>9/21 - Atlanta, GA - Masquerade         </p>
                <p>9/24 - Charlotte, NC - The Underground  </p>
                </aside>
                <main className="ticket-buttons">
                    <button>Tickets</button>
                    <button>Tickets</button>
                    <button>Tickets</button>
                    <button>Tickets</button>
                    </main>
            </form>
            </div>
            </div>
            )
}