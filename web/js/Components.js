// Without React
/*
function RenderUsersList(response) {
    let html = "<table class='table table-striped table-sm'><thead><tr><th>Ususario</th><th>Nombre</th><th>Apellido</th><th>Email</th><th></th></tr></thead><tbody>";
    response.forEach((user) => {
        html+=`<tr><td>${user.username}</td><td>${user.name}</td><td>${user.surname}</td><td>${user.emailAddress ? user.emailAddress : ''}</td>
        <td width="12%"><button type="button" class="btn btn-primary" onclick="controller.getUser('${user.username}');"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-outline-danger mx-1" onclick="controller.deleteUser('${user.username}');"><i class="bi bi-x" style="font-size: 1rem;"></i></button></td></tr>`;
    });
    html += "</tbody></table>";
    
    container = document.getElementById("usersList");
    container.innerHTML = html;
}
*/

// With React :-)
const RenderUserListItem = ({ user }) => (
    <tr>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.emailAddress ? user.emailAddress : ''}</td>
        <td width="12%">
            <button type="button" className="btn btn-primary" onClick={() => controller.getUser(user.username)}>
                <i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-outline-danger mx-1" onClick={() => controller.deleteUser(user.username)}>
                <i className="bi bi-x" style={{ fontSize: '1rem' }}></i>
            </button>
        </td>
    </tr>
);

const RenderUsersList = ({ userlist }) => userlist.map((user) => <RenderUserListItem key={user.username} user={user} />);

class RenderUsers extends React.Component {
    render() {         
        return <table className='table table-striped table-sm'>
            <thead>
                <tr>
                    <th>Ususario</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <RenderUsersList userlist={this.props.users} />
            </tbody>
        </table>
    }
}

const renderList = (response) => {
    ReactDOM.render(
        <RenderUsers users={response} />, 
        document.getElementById("usersList")
    );
}