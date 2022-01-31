import React from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import './team.css';
function Team() {
  return (
      <div className="team">
          <div className="team-heading">
              <h1>Meet The Team</h1>
          </div>
          <div className="team-core">

          </div>
          <div className="team-rest">
              <div className="team-cat">

              
              <div className="team-item__heading">
                  <h1>Core Members</h1>
              </div>
              <div className="team-item">
              <TeamCard />
              <TeamCard />
              <TeamCard />
              </div>
              
              </div>
              <div className="team-cat">

              
              <div className="team-item__heading">
                  <h1>MENTORS</h1>
              </div>
              <div className="team-item">
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              </div>
              
              </div>
          </div>
        
      </div>
  );
}

export default Team;
