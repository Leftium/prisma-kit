<script>
    let password='asdf'  + Math.random();
    let email= Math.random()+ '@example.com';
    let phone='911' + Math.random();;
    let name='John';
    let age=33;

    const handleSubmit = async () => {
      fetch("/users/__data.json", {
        method: "POST",
        body: JSON.stringify({
          password,
          email,
          phone,
          name,
          age
        })
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch((e) => alert(e))
    }
  </script>

  <form on:submit|preventDefault|stopPropagation={handleSubmit}>

    <input bind:value={email} type="email" required />
    <input bind:value={password} type="password" required />
    <input bind:value={name} required />
    <input bind:value={phone} type="tel" required />
    <input bind:value={age} type="number" required />

    <button type="submit">Submit</button>
  </form>