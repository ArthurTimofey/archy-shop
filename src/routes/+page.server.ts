import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('product').select();

	return {
		products: data ?? []
	};
}
