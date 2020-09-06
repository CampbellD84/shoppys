import { useState, ChangeEvent, FormEvent } from 'react'
import { Box, Button, Card, CardBody, CardFooter, Grid, Grommet, Form, FormField, Image, TextInput, Text } from 'grommet'
import { grommet } from 'grommet/themes'

export default function FilmSearch() {
  const [filmQuery, setFilmQuery] = useState("")
  const [filmResult, setFilmResult] = useState([])
  const KEY: string = "bc2b7d2d";


  const searchFilm = async (e) => {
    e.preventDefault()
    const url = `https://www.omdbapi.com/?apikey=${KEY}&type=movie&s=${filmQuery}`

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.Search)
      setFilmResult(data.Search)
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Form onSubmit={searchFilm}>
          <FormField label="Film" htmlFor="filmQuery">
            <TextInput
              name="film"
              placeholder="i.e The Dark Knight"
              value={filmQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFilmQuery(e.target.value)}
            />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button type="submit" label="Search" primary />
            <Button type="reset" label="Clear" />
          </Box>
        </Form>
      </Box>
      <Box pad="medium">
        <Grid gap="small" rows="small" columns={{ count: 'fill', size: 'medium' }}>
          {filmResult.map(film => (
            <Card background="#2A9D8F" key={film.imdbID} gap="medium">
              <CardBody pad="small" direction="row" justify="evenly" alignContent="around">
                <Box gap="small" pad="xxsmall" align="center" justify="evenly" direction="column">
                  <Box alignContent="center" justify="center">
                    <Text weight="bold" size="large" color="#050517">
                      {film.Title}
                    </Text>
                    <Text size="large" color="#050517">{film.Year}</Text>
                  </Box>
                </Box>
              </CardBody>
              <CardFooter align="center" justify="center" pad={{ horizontal: 'medium', vertical: 'small' }}>
                <Button label="Nominate" primary />
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </Grommet>
  )
}