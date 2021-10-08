import { team } from "../database";

function MemberProfile({ match }) {
  const userProfile = team.filter((member) => {
    return member.userid == match.params.userid;
  });
  return (
    <section className="team-member-profile">
      {userProfile.map((user) => {
        return (
          <div className="user-bio">
            <h3>{user.fullName}</h3>

            <p>
              {user.bio
                ? user.bio
                : "Which is more important,asked Big Panda, 'The journey or the destination?' 'The Company.' said " +
                  user.fullName}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default MemberProfile;
