<script lang="ts">
	import '../app.css';
	import { config } from '@fortawesome/fontawesome-svg-core';
	import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
	import type { LayoutData } from './$types';
	import { env } from '$env/dynamic/public';
	config.autoAddCss = false;
	export let data: LayoutData;
</script>

<div class="navbar bg-base-100">
	<div class="flex-1 space-x-4">
		<a href="/" class="btn btn-ghost text-xl">Page name</a>
		<a href="/contest" class="btn btn-ghost"> Item 1 </a>
	</div>
	<div class="flex-none gap-2">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					{#if data.user && data.user.avatar}
						<img
							src="{env.PUBLIC_PB_URL}/api/files/users/{data.user.id}/{data.user
								.avatar}"
							alt="avatar"
						/>
					{:else}
						<img
							src="https://api.dicebear.com/8.x/thumbs/svg?seed=Coco"
							alt="default avatar"
						/>
					{/if}
				</div>
			</div>
			<ul
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
			>
				{#if data.user}
					<p>Xin chào, {data.user.name}</p>
					<li>
						<a href={null} class="justify-between">
							Hồ sơ
							<span class="badge badge-outline badge-warning">Đang phát triển</span>
						</a>
					</li>
					<li>
						<a href={null}
							>Cài đặt<span class="badge badge-outline badge-warning"
								>Đang phát triển</span
							></a
						>
					</li>
					<li>
						<form action="/login?/logout" method="post" class="w-full">
							<button type="submit" role="menuitem" class="w-full">
								Đăng xuất
							</button>
						</form>
					</li>
				{:else}
					<li><a href="/login">Đăng nhập</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>

<div class="p-4">
	<slot />
</div>
