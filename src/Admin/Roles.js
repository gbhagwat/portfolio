import React from 'react';

function RolesForm(props) {
    const [formData, setFormData] = React.useState({role: "", summary: ""});

    function changeHandler(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({ role: "", summary: ""});
    }

    return (
    <>
        <h1>Roles Editor</h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="role" placeholder="Role" value={formData.role} onChange={changeHandler} />
            <input type="textarea" name="summary" placeholder="Summary" value={formData.summary} onChange={changeHandler} />
            <button>Submit Role</button>            
        </form>

    </>
    );
}

function ListOfRoles(props) {
    return (
        <ul>
            {props.allRoles.map((r) => (
                <li key={r.role}>
                    {r.role}. {r.summary}
                </li>
            ))}
        </ul>
    )
}

export function Roles() {
    const [allRoles, updateAllRoles] = React.useState([]);

    function addRole(role) {
        updateAllRoles([...allRoles, role]);
    }

    return (
        <div>
            <RolesForm onAdd={addRole} />
            <ListOfRoles allRoles={allRoles} />
        </div>
    )
}