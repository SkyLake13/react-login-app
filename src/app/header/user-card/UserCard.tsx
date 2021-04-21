import './UserCard.scss';


export function UserCard(props: { userName: string, fullName: string }): JSX.Element {
    return (
        <div className="user-card">
            <div>
                {props.userName}
            </div>
            <div>
                {props.fullName}
            </div>
        </div>
    );
}
