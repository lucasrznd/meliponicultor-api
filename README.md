<h2 align="center">Meliponicultor API</h2>

<div align="center">
  
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
</div>

<h2 id="description">📙 Description</h2>

This component is responsible for helping meliponiculturists manage their bee traps. Meliponiculture is the activity of breeding stingless bee species.

<h2 id="features">✨ Features</h2>

- **Registration of Meliponicultor**: Endpoints for querying, creating, updating, or deleting.
- **Registration of Bee Bait**: Endpoints for querying, creating, updating, or deleting.

<h2 id="installation">🛠️ Installation</h2>

1. Clone the repository to your local environment:

```
git clone https://github.com/lucasrznd/meliponicultor-api.git
```

2. Navigate to the project directory:

```
cd meliponicultor-api
```

3. Start the application using Docker Compose:

```
docker-compose up -d
```

4. Access the api container's shell and run database creation and migrations:

```
npx sequelize db:create
```

```
npx sequelize db:migrate
```

<h2 id="author">👨🏻‍💻 Author</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lucasrznd"><img src="https://avatars.githubusercontent.com/u/101664450?v=4&v=" width="115px;" alt="Lucas Rezende"/><br /><sub><b>Lucas Rezende</b></sub></a><br/><a title="Código">💻</a></td>
  </tbody>
</table>
