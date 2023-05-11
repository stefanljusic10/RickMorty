import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// RTK Query
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    // get all characters for certain page
    getCharacters: builder.query({
      query: (page) => `/character/?page=${page}`,
    }),
    // get character by id
    getCharacter: builder.query({
      query: (id) => `/character/${id}`,
    }),
    // get episode by id
    getEpisode: builder.query({
      query: (id) => `/episode/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery, useGetEpisodeQuery } = apiSlice;
