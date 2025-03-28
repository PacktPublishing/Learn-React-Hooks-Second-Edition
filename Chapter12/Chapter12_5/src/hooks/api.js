import { useSuspenseQuery, useMutation } from '@tanstack/react-query'
import {
  fetchPosts,
  fetchPost,
  searchPosts,
  createPost,
  queryClient,
} from '@/api.js'

export function useAPIFetchPosts({ featured }) {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', featured],
    queryFn: async () => await fetchPosts({ featured }),
  })
  return data
}

export function useAPIFetchPost({ id }) {
  const { data } = useSuspenseQuery({
    queryKey: ['post', id],
    queryFn: async () => await fetchPost({ id }),
  })
  return data
}

export function useAPISearchPosts({ query }) {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', query],
    queryFn: async () => await searchPosts(query),
  })
  return data
}

export function useAPICreatePost() {
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })
  return createPostMutation.mutateAsync
}
