module.exports = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("usertables",{


        userSurname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userphone:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return UserTable;
}