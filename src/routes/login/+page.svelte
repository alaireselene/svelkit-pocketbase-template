<script lang="ts">
	import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { PageData } from '../$types';
	export let page: PageData;
</script>

<div class="px-0">
	<form action="?/login" method="post">
		<label class="input input-bordered flex items-center gap-2">
			<FontAwesomeIcon icon={faThumbsUp} />
			<input type="text" name="username" class="grow" placeholder="Username" />
		</label>
		<label class="input input-bordered flex items-center gap-2">
			<FontAwesomeIcon icon={faThumbsUp} />
			<input type="password" name="password" class="grow" placeholder="Password" />
		</label>
		<button class="btn" type="submit">Đăng nhập</button>
	</form>
</div>
