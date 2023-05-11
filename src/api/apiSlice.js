import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page) => `/character/?page=${page}`,
    }),
    getCharacter: builder.query({
      query: (id) => `/character/${id}`,
    }),
    getEpisode: builder.query({
      query: (id) => `/episode/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery, useGetEpisodeQuery } = apiSlice;
